import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  MessageSquare,
  Settings,
  Bell,
  Zap,
  Brain,
  Clock,
  Target
} from 'lucide-react'

// Temporary components
const Button = ({ children, className = '', ...props }: any) => (
  <button className={`px-4 py-2 rounded-lg font-medium transition-all ${className}`} {...props}>
    {children}
  </button>
)

const Card = ({ children, className = '', ...props }: any) => (
  <div className={`p-6 rounded-lg border ${className}`} {...props}>
    {children}
  </div>
)

export function DashboardPage() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const { user } = useAuth()

  const stats = [
    {
      icon: Users,
      title: language === 'ar' ? 'الموظفين الذكيين النشطين' : 'Active AI Employees',
      value: '4',
      change: '+2',
      color: 'neon-cyan'
    },
    {
      icon: DollarSign,
      title: language === 'ar' ? 'الوفورات الشهرية' : 'Monthly Savings',
      value: '$12,450',
      change: '+15%',
      color: 'electric-violet'
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'معدل العائد' : 'ROI',
      value: '245%',
      change: '+8%',
      color: 'neon-cyan'
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'متوسط وقت الاستجابة' : 'Avg Response Time',
      value: '2.3s',
      change: '-0.5s',
      color: 'electric-violet'
    }
  ]

  const aiEmployees = [
    {
      name: language === 'ar' ? 'أليكس' : 'Alex',
      title: language === 'ar' ? 'محاسب ذكي' : 'AI Accountant',
      status: 'active',
      tasksCompleted: 147,
      efficiency: '98%',
      lastActive: '2 min ago'
    },
    {
      name: language === 'ar' ? 'مايا' : 'Maya',
      title: language === 'ar' ? 'مدير مبيعات ذكي' : 'AI Sales Manager',
      status: 'active',
      tasksCompleted: 203,
      efficiency: '96%',
      lastActive: 'Active now'
    },
    {
      name: language === 'ar' ? 'سام' : 'Sam',
      title: language === 'ar' ? 'ممثل خدمة عملاء ذكي' : 'AI Customer Service',
      status: 'active',
      tasksCompleted: 89,
      efficiency: '94%',
      lastActive: '5 min ago'
    },
    {
      name: language === 'ar' ? 'دانا' : 'Dana',
      title: language === 'ar' ? 'محلل بيانات ذكي' : 'AI Data Analyst',
      status: 'idle',
      tasksCompleted: 156,
      efficiency: '97%',
      lastActive: '1 hour ago'
    }
  ]

  const recentActivity = [
    {
      type: 'task_completed',
      message: language === 'ar' ? 'أليكس أنهى معالجة الفاتورة #INV-2024-001' : 'Alex completed processing invoice #INV-2024-001',
      timestamp: '2 minutes ago',
      icon: 'check'
    },
    {
      type: 'new_lead',
      message: language === 'ar' ? 'مايا حددت عميل محتمل جديد' : 'Maya identified a new qualified lead',
      timestamp: '15 minutes ago',
      icon: 'user'
    },
    {
      type: 'report_generated',
      message: language === 'ar' ? 'دانا أنشأت تقرير المبيعات الأسبوعي' : 'Dana generated weekly sales report',
      timestamp: '1 hour ago',
      icon: 'report'
    },
    {
      type: 'customer_resolved',
      message: language === 'ar' ? 'سام حل استفسار عميل برضا 98%' : 'Sam resolved customer inquiry with 98% satisfaction',
      timestamp: '2 hours ago',
      icon: 'message'
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-silver-mist mb-2">
              {language === 'ar' ? `مرحباً بك، ${user?.email?.split('@')[0] || 'مستخدم'}!` : `Welcome back, ${user?.email?.split('@')[0] || 'User'}!`}
            </h1>
            <p className="text-silver-mist/70">
              {language === 'ar' ? 'إليك نظرة عامة على فريق الذكاء الاصطناعي الخاص بك' : "Here's an overview of your AI workforce"}
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="ai-card">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`h-8 w-8 text-${stat.color}`} />
                    <span className={`text-sm font-medium px-2 py-1 rounded-full bg-${stat.color}/10 text-${stat.color} border border-${stat.color}/20`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className={`text-2xl font-bold text-${stat.color} glow-text mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-silver-mist/70">
                    {stat.title}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Employees Status */}
          <div className="lg:col-span-2">
            <Card className="ai-card">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-6 w-6 text-neon-cyan" />
                <h2 className="text-xl font-bold text-silver-mist">
                  {language === 'ar' ? 'حالة الموظفين الذكيين' : 'AI Employees Status'}
                </h2>
              </div>
              
              <div className="space-y-4">
                {aiEmployees.map((employee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-cosmic-blue/30 rounded-lg border border-steel-gray/30 hover:border-neon-cyan/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan/20 to-electric-violet/20 flex items-center justify-center border border-neon-cyan/30">
                        <Brain className="h-6 w-6 text-neon-cyan" />
                      </div>
                      <div>
                        <h3 className="font-medium text-silver-mist">{employee.name}</h3>
                        <p className="text-sm text-silver-mist/70">{employee.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-sm font-medium text-silver-mist">{employee.tasksCompleted}</div>
                        <div className="text-xs text-silver-mist/60">
                          {language === 'ar' ? 'مهام منجزة' : 'Tasks'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-electric-violet">{employee.efficiency}</div>
                        <div className="text-xs text-silver-mist/60">
                          {language === 'ar' ? 'الكفاءة' : 'Efficiency'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs ${
                          employee.status === 'active' 
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            employee.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'
                          }`} />
                          {employee.status === 'active' 
                            ? (language === 'ar' ? 'نشط' : 'Active')
                            : (language === 'ar' ? 'خامل' : 'Idle')
                          }
                        </div>
                        <div className="text-xs text-silver-mist/60 mt-1">
                          {employee.lastActive}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-steel-gray/30">
                <div className="flex gap-4">
                  <Button className="flex-1 btn-futuristic">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {language === 'ar' ? 'فتح محادثة جماعية' : 'Open Team Chat'}
                  </Button>
                  <Button className="flex-1 glow-border-violet">
                    <Settings className="h-4 w-4 mr-2" />
                    {language === 'ar' ? 'إعدادات الفريق' : 'Team Settings'}
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="ai-card">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="h-6 w-6 text-electric-violet" />
                <h2 className="text-xl font-bold text-silver-mist">
                  {language === 'ar' ? 'النشاط الأخير' : 'Recent Activity'}
                </h2>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-3 p-3 bg-cosmic-blue/20 rounded-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan/20 to-electric-violet/20 flex items-center justify-center border border-neon-cyan/30 flex-shrink-0 mt-1">
                      {activity.icon === 'check' && <Target className="h-4 w-4 text-neon-cyan" />}
                      {activity.icon === 'user' && <Users className="h-4 w-4 text-electric-violet" />}
                      {activity.icon === 'report' && <BarChart3 className="h-4 w-4 text-neon-cyan" />}
                      {activity.icon === 'message' && <MessageSquare className="h-4 w-4 text-electric-violet" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-silver-mist leading-relaxed">
                        {activity.message}
                      </p>
                      <p className="text-xs text-silver-mist/50 mt-1">
                        {activity.timestamp}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Button className="w-full mt-4 btn-futuristic">
                {language === 'ar' ? 'عرض المزيد' : 'View All Activity'}
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="ai-card">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-6 w-6 text-neon-cyan" />
                <h2 className="text-xl font-bold text-silver-mist">
                  {language === 'ar' ? 'إجراءات سريعة' : 'Quick Actions'}
                </h2>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full btn-futuristic text-left justify-start">
                  <Calendar className="h-4 w-4 mr-3" />
                  {language === 'ar' ? 'جدولة عرض توضيحي' : 'Schedule Demo'}
                </Button>
                <Button className="w-full glow-border text-left justify-start">
                  <Users className="h-4 w-4 mr-3" />
                  {language === 'ar' ? 'إضافة موظف جديد' : 'Add New Employee'}
                </Button>
                <Button className="w-full glow-border-violet text-left justify-start">
                  <BarChart3 className="h-4 w-4 mr-3" />
                  {language === 'ar' ? 'إنشاء تقرير' : 'Generate Report'}
                </Button>
                <Button className="w-full btn-futuristic text-left justify-start">
                  <Target className="h-4 w-4 mr-3" />
                  {language === 'ar' ? 'حاسبة العائد' : 'ROI Calculator'}
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="mt-8">
          <Card className="ai-card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-electric-violet" />
                <h2 className="text-xl font-bold text-silver-mist">
                  {language === 'ar' ? 'أداء الفريق - آخر 30 يوم' : 'Team Performance - Last 30 Days'}
                </h2>
              </div>
              <div className="flex gap-2">
                <Button className="btn-futuristic text-sm">
                  {language === 'ar' ? 'يومي' : 'Daily'}
                </Button>
                <Button className="glow-border text-sm">
                  {language === 'ar' ? 'أسبوعي' : 'Weekly'}
                </Button>
                <Button className="glow-border-violet text-sm">
                  {language === 'ar' ? 'شهري' : 'Monthly'}
                </Button>
              </div>
            </div>
            
            {/* Chart Placeholder */}
            <div className="h-64 bg-gradient-to-br from-cosmic-blue/30 to-steel-gray/20 rounded-lg border border-steel-gray/30 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-silver-mist/30 mx-auto mb-4" />
                <p className="text-silver-mist/50">
                  {language === 'ar' ? 'مخطط الأداء قادم قريباً' : 'Performance chart coming soon'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}