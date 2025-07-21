import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

export function CalculatorPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { user } = useAuth();

  const [currentMonthlyStaffCost, setCurrentMonthlyStaffCost] = useState(5000);
  const [numberOfStaff, setNumberOfStaff] = useState(1);
  const [aiEmployeeMonthlyCost, setAiEmployeeMonthlyCost] = useState(1500);
  const [projectedMonthlySavings, setProjectedMonthlySavings] = useState<number | null>(null);
  const [annualSavings, setAnnualSavings] = useState<number | null>(null);

  const handleCalculateROI = async () => {
    const totalCurrentCost = currentMonthlyStaffCost * numberOfStaff;
    const savings = totalCurrentCost - aiEmployeeMonthlyCost;
    setProjectedMonthlySavings(savings);
    setAnnualSavings(savings * 12);

    if (user) {
      const { error } = await supabase.from('roi_calculations').insert([
        {
          user_id: user.id,
          current_staff_cost: totalCurrentCost,
          ai_replacement_cost: aiEmployeeMonthlyCost,
          projected_savings: savings,
          calculation_data: {
            currentMonthlyStaffCost,
            numberOfStaff,
            aiEmployeeMonthlyCost,
          },
        },
      ]);

      if (error) {
        console.error('Error saving ROI calculation:', error);
      }
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-electric-violet bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('calculator.title')}
          </motion.h1>
          <p className="text-lg text-silver-mist/70 max-w-2xl mx-auto">
            {t('calculator.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="ai-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-bold text-silver-mist">
                <Calculator className="h-6 w-6 text-neon-cyan" />
                {t('calculator.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="current-cost">{'Current Monthly Staff Cost'}</Label>
                  <Input
                    id="current-cost"
                    type="number"
                    value={currentMonthlyStaffCost}
                    onChange={(e) => setCurrentMonthlyStaffCost(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="staff-number">{'Number of Staff'}</Label>
                  <Input
                    id="staff-number"
                    type="number"
                    value={numberOfStaff}
                    onChange={(e) => setNumberOfStaff(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="ai-cost">{'AI Employee Monthly Cost'}</Label>
                <Input
                  id="ai-cost"
                  type="number"
                  value={aiEmployeeMonthlyCost}
                  onChange={(e) => setAiEmployeeMonthlyCost(Number(e.target.value))}
                  className="mt-1"
                />
              </div>

              <Button
                onClick={handleCalculateROI}
                className="w-full bg-gradient-to-r from-neon-cyan to-electric-violet hover:from-electric-violet hover:to-neon-cyan text-deep-space font-semibold py-3 text-lg"
              >
                {t('calculator.calculate')}
              </Button>

              {projectedMonthlySavings !== null && annualSavings !== null && (
                <div className="pt-6 space-y-4">
                  <div className="p-4 border border-steel-gray/30 rounded-lg bg-cosmic-blue/30">
                    <h3 className="text-lg font-medium text-silver-mist">{'Projected Monthly Savings'}</h3>
                    <p className="text-2xl font-bold text-neon-cyan glow-text">{formatCurrency(projectedMonthlySavings)}</p>
                  </div>
                  <div className="p-4 border border-steel-gray/30 rounded-lg bg-cosmic-blue/30">
                    <h3 className="text-lg font-medium text-silver-mist">{'Annual Savings'}</h3>
                    <p className="text-2xl font-bold text-electric-violet glow-text">{formatCurrency(annualSavings)}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}