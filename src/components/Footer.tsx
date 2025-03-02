/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import useLanguageStore from '~/lib/store';

const Footer = () => {
  const language = useLanguageStore((state) => state.language);

  const translate = (en: string, fr: string, ar: string) => {
    return language === 'fr' ? fr : language === 'ar' ? ar : en;
  };
  
  const year = new Date().getFullYear();

  const footerSections = {
    [translate('Edu AI', 'IA Éducative', 'التعليم الذكي')]: [
      translate('Download', 'Télécharger', 'تحميل'),
      translate('About Us', 'À Propos', 'من نحن'),
      translate('Careers', 'Carrières', 'وظائف'),
      translate('Customers', 'Clients', 'العملاء'),
      translate('Community', 'Communauté', 'المجتمع'),
      translate('Affiliate & Referrals', 'Affiliés et Références', 'الشركاء والإحالات'),
      translate('Reviews', 'Avis', 'التقييمات'),
      translate('Press', 'Presse', 'الصحافة'),
      translate('Brand', 'Marque', 'العلامة التجارية'),
      translate('Product Roadmap', 'Feuille de Route', 'خارطة طريق المنتج'),
      translate('Status', 'Statut', 'الحالة')
    ],
    [translate('Resources', 'Ressources', 'الموارد')]: [
      translate('Help Docs', 'Documents d\'Aide', 'وثائق المساعدة'),
      translate('On-Demand Demo', 'Démo à la Demande', 'عرض توضيحي عند الطلب'),
      translate('Edu AI University', 'Université IA Éducative', 'جامعة التعليم الذكي'),
      translate('Webinars', 'Webinaires', 'الندوات عبر الإنترنت'),
      translate('Events', 'Événements', 'الفعاليات'),
      translate('Templates', 'Modèles', 'القوالب'),
      translate('Import', 'Importer', 'استيراد'),
      translate('API', 'API', 'واجهة برمجة التطبيقات'),
      translate('Consultants', 'Consultants', 'المستشارون'),
      translate('Partners', 'Partenaires', 'الشركاء'),
      translate('Contact Us', 'Contactez-Nous', 'اتصل بنا')
    ],
    [translate('Features', 'Fonctionnalités', 'الميزات')]: [
      translate('Gantt Chart', 'Diagramme de Gantt', 'مخطط جانت'),
      translate('Dashboards', 'Tableaux de Bord', 'لوحات المعلومات'),
      translate('Native Time Tracking', 'Suivi du Temps Natif', 'تتبع الوقت المدمج'),
      translate('Mind Maps', 'Cartes Mentales', 'الخرائط الذهنية'),
      translate('Automations', 'Automatisations', 'أتمتة'),
      translate('Notepad', 'Bloc-notes', 'المفكرة'),
      translate('Integrations', 'Intégrations', 'التكاملات'),
      translate('Email', 'Courriel', 'البريد الإلكتروني'),
      translate('To-Do List', 'Liste de Tâches', 'قائمة المهام'),
      translate('Kanban Board', 'Tableau Kanban', 'لوحة كانبان'),
      translate('Sprints', 'Sprints', 'سبرينتس')
    ],
    [translate('Learn & Compare', 'Apprendre & Comparer', 'تعلم ومقارنة')]: [
      translate('Blog', 'Blog', 'المدونة'),
      translate('Software Team Hub', 'Hub d\'Équipe Logicielle', 'مركز فريق البرمجيات'),
      translate('Agency Hub', 'Hub d\'Agence', 'مركز الوكالة')
    ]
  };

  return (
    <footer className="bg-navy-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and description */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="/images/logo.png" alt="#" className="w-[150px]" />
            </div>
            <p className="text-sm opacity-75 max-w-xs">
              {translate(
                'Discover a new way of learning that connects learners, parents, and students on one convenient and easy-to-use platform.',
                'Découvrez une nouvelle façon d\'apprendre qui connecte les apprenants, les parents et les élèves sur une plateforme pratique et facile à utiliser.',
                'اكتشف طريقة جديدة للتعلم تربط المتعلمين وأولياء الأمور والطلاب على منصة واحدة مريحة وسهلة الاستخدام.'
              )}
            </p>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerSections).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-white font-semibold">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with app stores and social links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* App store buttons */}
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/appSore.png" alt={translate('App Store', 'App Store', 'متجر التطبيقات')} className="h-10" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/playStore.png" alt={translate('Play Store', 'Play Store', 'متجر بلاي')} className="h-10" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/mac.png" alt={translate('MAC App Store', 'MAC App Store', 'متجر تطبيقات ماك')} className="h-10" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="/images/windows.png" alt={translate('Microsoft Store', 'Microsoft Store', 'متجر مايكروسوفت')} className="h-10" />
              </a>
            </div>

            {/* Social links and copyright */}
            <div className="flex items-center space-x-8">
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Linkedin size={16} />
                </a>
              </div>
              
              {/* Legal links */}
              <div className="flex space-x-4 text-sm">
                <span>© {year} EduAI</span>
                <Link href="/faq" className="hover:text-white">
                  {translate('FAQ', 'FAQ', 'الأسئلة الشائعة')}
                </Link>
                <Link href="/privacy" className="hover:text-white">
                  {translate('Privacy', 'Confidentialité', 'الخصوصية')}
                </Link>
                <Link href="/terms" className="hover:text-white">
                  {translate('Terms', 'Conditions', 'الشروط')}
                </Link>
                <Link href="/deletion" className="hover:text-white">
                  {translate('Deletion', 'Suppression', 'الحذف')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <img src="/images/web3.png" alt="#" className="absolute bottom-20 -left-0" />
      </div>
    </footer>
  );
};

export default Footer;