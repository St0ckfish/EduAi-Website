/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Check, X } from 'lucide-react';
import useLanguageStore from '~/lib/store';

const PricingTable = () => {
  const language = useLanguageStore((state) => state.language);

  const translate = (en: string, fr: string, ar: string) => {
    return language === 'fr' ? fr : language === 'ar' ? ar : en;
  };

  const plans = [
    translate('Basic', 'Basique', 'أساسي'),
    translate('Standard', 'Standard', 'قياسي'),
    translate('Premium', 'Premium', 'متميز')
  ];

  return (
    <div className="min-h-screen text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-[#00425A] rounded-lg p-4 md:p-8">
          <h2 className="text-2xl font-bold mb-8">
            {translate('Plans, pricing', 'Plans, tarification', 'الخطط والأسعار')}
          </h2>

          {/* Plan buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {plans.map((plan, index) => (
              <div key={plan} className="text-center">
                <h3 className="text-lg font-medium mb-3">{plan}</h3>
                <button className="w-full px-4 py-2 bg-transparent border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors">
                  {index === 0 
                    ? translate('Start free trial', 'Commencer l\'essai gratuit', 'ابدأ النسخة التجريبية المجانية')
                    : translate('Get started', 'Commencer', 'ابدأ الآن')}
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Table */}
          <div className="space-y-8">
            {/* Plans Section */}
            <div>
              <h3 className="text-blue-400 mb-4">
                {translate('Plans', 'Plans', 'الخطط')}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <tbody>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('Month', 'Mois', 'شهر')}</td>
                      <td className="py-4 text-center">{translate('Free', 'Gratuit', 'مجاني')}</td>
                      <td className="py-4 text-center">40$</td>
                      <td className="py-4 text-center">300$</td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('Year', 'Année', 'سنة')}</td>
                      <td className="py-4 text-center">{translate('Free', 'Gratuit', 'مجاني')}</td>
                      <td className="py-4 text-center">
                        400$ <span className="text-green-400">{translate('(80$ save)', '(80$ d\'économie)', '(توفير 80$)')}</span>
                      </td>
                      <td className="py-4 text-center">
                        3000$ <span className="text-green-400">{translate('(600$ save)', '(600$ d\'économie)', '(توفير 600$)')}</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('User', 'Utilisateur', 'مستخدم')}</td>
                      <td className="py-4 text-center">100~300</td>
                      <td className="py-4 text-center">300~1000</td>
                      <td className="py-4 text-center">1000~3000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Available Services Section */}
            <div>
              <h3 className="text-blue-400 mb-4">
                {translate('Available services', 'Services disponibles', 'الخدمات المتاحة')}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <tbody>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('School Management', 'Gestion scolaire', 'إدارة المدرسة')}</td>
                      <td className="py-4 text-center">
                        <Check className="inline-block text-green-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <Check className="inline-block text-green-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <Check className="inline-block text-green-400" size={20} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('Communication Channels', 'Canaux de communication', 'قنوات الاتصال')}</td>
                      <td className="py-4 text-center">
                        <X className="inline-block text-red-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <Check className="inline-block text-green-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <Check className="inline-block text-green-400" size={20} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('GPS Tracker', 'Traceur GPS', 'متتبع GPS')}</td>
                      <td className="py-4 text-center">
                        <X className="inline-block text-red-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <Check className="inline-block text-green-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <Check className="inline-block text-green-400" size={20} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('AI Assistants', 'Assistants IA', 'مساعدين الذكاء الاصطناعي')}</td>
                      <td className="py-4 text-center">
                        <X className="inline-block text-red-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <X className="inline-block text-red-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <Check className="inline-block text-green-400" size={20} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('Analysis/Insights', 'Analyse/Insights', 'التحليل/الرؤى')}</td>
                      <td className="py-4 text-center">
                        <X className="inline-block text-red-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <X className="inline-block text-red-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <Check className="inline-block text-green-400" size={20} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('Vision Monitor', 'Moniteur de vision', 'مراقب الرؤية')}</td>
                      <td className="py-4 text-center">
                        <X className="inline-block text-red-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <X className="inline-block text-red-400" size={20} />
                      </td>
                      <td className="py-4 text-center">
                        <Check className="inline-block text-green-400" size={20} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Storage Plan Section */}
            <div>
              <h3 className="text-blue-400 mb-4">
                {translate('Storage plan', 'Plan de stockage', 'خطة التخزين')}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <tbody>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('Storage space', 'Espace de stockage', 'مساحة التخزين')}</td>
                      <td className="py-4 text-center">10 GB</td>
                      <td className="py-4 text-center">50 GB</td>
                      <td className="py-4 text-center">200 GB</td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('Add 50GB storage', 'Ajouter 50 GB de stockage', 'إضافة 50 جيجابايت من التخزين')}</td>
                      <td className="py-4 text-center">50$/
                        {translate('Month', 'Mois', 'شهر')}
                      </td>
                      <td className="py-4 text-center">50$/
                        {translate('Month', 'Mois', 'شهر')}
                      </td>
                      <td className="py-4 text-center">50$/
                        {translate('Month', 'Mois', 'شهر')}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-500">
                      <td className="py-4">{translate('Add 200GB storage', 'Ajouter 200 GB de stockage', 'إضافة 200 جيجابايت من التخزين')}</td>
                      <td className="py-4 text-center">100$/
                        {translate('Month', 'Mois', 'شهر')}
                      </td>
                      <td className="py-4 text-center">100$/
                        {translate('Month', 'Mois', 'شهر')}
                      </td>
                      <td className="py-4 text-center">100$/
                        {translate('Month', 'Mois', 'شهر')}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Robot decorative images (hidden on smaller screens) */}
        <img
          src="/images/robbot.png"
          alt={translate("Robot decoration", "Décoration robot", "زخرفة روبوت")}
          className="hidden md:block absolute -bottom-16 -left-16"
        />
        <img
          src="/images/robbot3.png"
          alt={translate("Robot decoration", "Décoration robot", "زخرفة روبوت")}
          className="hidden md:block absolute -bottom-16 -right-16 max-[1300px]:-right-0"
        />
      </div>
    </div>
  );
};

export default PricingTable;