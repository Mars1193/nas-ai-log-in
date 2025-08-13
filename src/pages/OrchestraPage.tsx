import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent, DragOverlay, Active } from '@dnd-kit/core';
import { SortableContext, useSortable, rectSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion, AnimatePresence } from 'framer-motion';
import { employees as initialEmployees, Employee } from '../data/employees';
import { Briefcase, BarChart2, Users, Headset, Wrench, Store } from 'lucide-react';

// Helper to get an icon based on category
const getIconForCategory = (category: Employee['category']) => {
    switch (category) {
        case 'finance': return <Briefcase />;
        case 'analytics': return <BarChart2 />;
        case 'support': return <Headset />;
        case 'sales': return <Store />;
        default: return <Wrench />;
    }
};

interface EmployeeCardProps {
  employee: Employee;
  isDragging?: boolean;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, isDragging }) => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
    const name = isArabic ? employee.name_ar : employee.name_en;
    const role = isArabic ? employee.title_ar : employee.title_en;

    return (
        <div
            className={`bg-slate-700 p-4 rounded-lg flex items-center gap-4 transition-shadow ${isDragging ? 'shadow-2xl shadow-cyan-500/50' : 'shadow-md'}`}
        >
            <div className="text-cyan-400">{getIconForCategory(employee.category)}</div>
            <div>
                <h3 className="font-bold text-white">{name}</h3>
                <p className="text-sm text-gray-400">{role}</p>
            </div>
        </div>
    );
};

const SortableEmployeeCard = ({ employee }: { employee: Employee }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: employee.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <EmployeeCard employee={employee} isDragging={isDragging} />
    </div>
  );
};


const OrchestraPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [bankEmployees, setBankEmployees] = useState<Employee[]>(initialEmployees);
  const [workspaceEmployees, setWorkspaceEmployees] = useState<Employee[]>([]);
  const [activeDragItem, setActiveDragItem] = useState<Employee | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor));

  const employeesById = useMemo(() => {
    const map = new Map<string, Employee>();
    initialEmployees.forEach(emp => map.set(emp.id, emp));
    return map;
  }, []);

  const findContainer = (id: string) => {
    if (workspaceEmployees.some(emp => emp.id === id)) {
      return 'workspace';
    }
    if (bankEmployees.some(emp => emp.id === id)) {
        return 'bank';
    }
    return null;
  };

  const handleDragStart = (event: { active: Active }) => {
      const { id } = event.active;
      setActiveDragItem(employeesById.get(id as string) || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveDragItem(null);

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeContainer = findContainer(activeId);
    let overContainer = findContainer(overId);

    if (!overContainer) {
        if (overId === 'workspace-dropzone') overContainer = 'workspace';
        if (overId === 'bank-dropzone') overContainer = 'bank';
    }

    if (!activeContainer || !overContainer || activeContainer === overContainer) {
      return;
    }

    const movedEmployee = employeesById.get(activeId);
    if (!movedEmployee) return;

    if (activeContainer === 'bank' && overContainer === 'workspace') {
        setBankEmployees(prev => prev.filter(emp => emp.id !== activeId));
        setWorkspaceEmployees(prev => [...prev, movedEmployee]);
    }
    else if (activeContainer === 'workspace' && overContainer === 'bank') {
        setWorkspaceEmployees(prev => prev.filter(emp => emp.id !== activeId));
        setBankEmployees(prev => [...prev, movedEmployee]);
    }
  };

  const handleStartSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 4000);
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="container mx-auto px-4 py-8 text-white min-h-screen">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">{t('orchestraTitle')}</h1>
            <p className="text-lg text-gray-400 mb-12 text-center">{t('orchestraSubtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Employees Bank */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-1 bg-slate-900/50 p-6 rounded-2xl border border-white/10" id="bank-dropzone">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">{t('employeesBank')}</h2>
            <SortableContext items={bankEmployees.map(emp => emp.id)} strategy={rectSortingStrategy}>
              <div className="space-y-4 min-h-[100px]">
                {bankEmployees.map(employee => (
                  <SortableEmployeeCard key={employee.id} employee={employee} />
                ))}
              </div>
            </SortableContext>
          </motion.div>

          {/* Workspace */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:col-span-2 bg-gray-900 p-6 rounded-2xl border-2 border-dashed border-gray-700" id="workspace-dropzone">
             <h2 className="text-2xl font-bold mb-6 text-cyan-400">{t('workspace')}</h2>
            <SortableContext items={workspaceEmployees.map(emp => emp.id)} strategy={rectSortingStrategy}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 min-h-[200px]">
                {workspaceEmployees.map((employee, index) => (
                    <motion.div
                        key={employee.id}
                        animate={isSimulating ? {
                            scale: [1, 1.05, 1],
                            transition: { delay: index * 0.2, duration: 1.5, repeat: Infinity }
                        } : {}}
                    >
                        <SortableEmployeeCard employee={employee} />
                    </motion.div>
                ))}
                 {workspaceEmployees.length === 0 && (
                    <div className="col-span-full flex items-center justify-center h-full text-gray-500">
                        <p>Drag and drop employees here to build your team.</p>
                    </div>
                 )}
              </div>
            </SortableContext>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="mt-12 text-center">
          <button
            onClick={handleStartSimulation}
            disabled={workspaceEmployees.length === 0 || isSimulating}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg text-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isSimulating ? t('Simulating...') : t('startSimulation')}
          </button>
          <AnimatePresence>
            {isSimulating && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-green-400 overflow-hidden"
                >
                    <p>Simulation in progress... Your AI team is performing the task!</p>
                </motion.div>
            )}
         </AnimatePresence>
        </motion.div>
      </div>
      <DragOverlay>
        {activeDragItem ? <EmployeeCard employee={activeDragItem} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default OrchestraPage;
