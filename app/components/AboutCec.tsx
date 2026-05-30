// components/AboutCEC.tsx
import React from 'react';
import { Milestone, Users, Target, Cpu, Globe, ShieldCheck } from 'lucide-react';

export default function AboutCEC() {
  return (
    <section id="about-cec" className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">
            Centrist Economic Club भनेको के हो?
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            यसमा किन जोडिने त्यसको बारेमा विस्तृत रूपमा बताउँदै छु!
          </p>
          <div className="mt-4 h-1 w-20 bg-blue-900 mx-auto rounded-full"></div>
        </div>

        {/* Intro Block */}
        <div className="bg-gray-50 border-l-4 border-blue-900 p-6 rounded-r-xl shadow-sm mb-12">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
            <span className="font-bold text-blue-900">Centrist Economic Club</span> एउटा यस्तो विशेष र संगठित सञ्जाल (Networking Body) हो, जसको परिकल्पना परम्परागत आर्थिक मोडेलहरू भन्दा फरक, देशको आर्थिक रूपान्तरण र नागरिकहरूको आर्थिक आत्मनिर्भरताका लागि गरिएको हो।
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            यो केवल एउटा सामान्य क्लब मात्र नभएर पूर्वीय दर्शनमा आधारित <span className="font-semibold text-gray-900">"मध्यमार्गी विचारधारा" (Centrist Ideology)</span> र <span className="font-semibold text-gray-900">"नागरिकतन्त्र" (Citizenism)</span> को जगमा उभिएको एउटा व्यावहारिक आर्थिक मोडेल हो। यसले एकाधिकारवादी पूँजीवाद (Capitalism) र राज्य-नियन्त्रित समाजवाद (Socialism) को बीचको सन्तुलित बाटो अवलम्बन गर्दै समुदायमा आधारित आर्थिक मोडेल (Community-Based Economic Model) लाई बढावा दिन्छ। यसको उद्देश्य मध्यम वर्गीय समाजको निर्माण हो।
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Milestone className="text-blue-900 w-6 h-6 shrink-0" />
            १. मुख्य अवधारणा र संरचना
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
              <h4 className="font-bold text-blue-900 text-lg mb-2">#समुदायवाद (Community-Based Economy)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">स्थानीय स्रोत, साधन र पूँजीको परिचालन स्थानीय समुदायकै स्वामित्वमा हुने गरी आर्थिक मोडेल तयार गर्नु।</p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
              <h4 className="font-bold text-blue-900 text-lg mb-2">#फिजिटलअर्थतन्त्र (Phygital Economy)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">परम्परागत भौतिक उत्पादन (Physical Production) र रैथाने सीपलाई आधुनिक डिजिटल प्रविधि (Digital Technology) सँग जोडेर उत्पादकत्व बढाउनु।</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
              <h4 className="font-bold text-blue-900 text-lg mb-2">#लक्ष्य-उन्मुखअभियान</h4>
              <p className="text-gray-600 text-sm leading-relaxed">क्लबका प्रत्येक सदस्यको औसत प्रतिव्यक्ति आम्दानीलाई $५,००० USD सम्म पुर्‍याउने दीर्घकालीन लक्ष्यका साथ काम गर्नु।</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-100 transition-colors">
              <h4 className="font-bold text-blue-900 text-lg mb-2">#संगठितसंरचना</h4>
              <p className="text-gray-600 text-sm leading-relaxed">यो क्लब तल्लो तह देखि केन्द्रसम्म एउटा बलियो संरचनामा बाँधिएको हुन्छ, जसमा जम्मा ८,५७५ जना अगुवा अर्थात् "आर्थिक योद्धाहरू" (Economic Warriors) को साझा सञ्जाल हो।</p>
            </div>
          </div>
        </div>

        {/* Why Join Callout Card */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="text-blue-400 w-6 h-6 shrink-0" />
            २. यस क्लबमा किन जोडिने? जोडिनु को फाइदा र आवश्यकता
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            हाम्रो देशमा बाहिरी Left ideology को राज्य नियन्त्रित आर्थिक नीति र Right ideology को बजार नियन्त्रित आर्थिक नीतिबाट आम नागरिकको आफ्नो व्यक्तिगत आर्थिक अवस्था सुधार्न सकिएन, समाजमा उद्यमशीलताको विकास गर्न सकिएन र देशलाई परनिर्भरताबाट मुक्त बनाउन सकिएन।
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            अब हामीले आफ्नो मौलिकतामा आधारित आर्थिक नीति जुन पूर्वीय दर्शनमा आधारित centrist ideology को Community based economic model लाई व्यवहारमा उतार्नका लागि यस क्लबमा हरेक तहका संयोजकहरूलाई जोडेर उहाँहरूलाई यस आर्थिक मोडेलको उदाहरणको रूपमा प्रस्तुत गर्ने र उहाँहरू को सफलता हेरेर आम नागरिक पनि यस आर्थिक model लाई अपनाएर देशलाई poor society बाट middle class society बनाउनका लागि यसमा जोडिनु पर्छ।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <div className="bg-white p-5 rounded-xl flex gap-4">
              <Target className="text-blue-900 w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">क) आर्थिक आत्मनिर्भरता र $५,००० को लक्ष्य</h4>
                <p className="text-gray-600 text-sm leading-relaxed">प्रत्येक व्यक्तिको आम्दानी बढाएर अहिले १५०० डलर प्रति व्यक्ति आम्दानीबाट वार्षिक ५,००० डलर पुर्‍याउने ठोस रोडम्याप प्राप्त गर्नुहुन्छ।</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl flex gap-4">
              <Cpu className="text-blue-900 w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">ख) फिजिटल (Phygital) र आधुनिक व्यवसाय</h4>
                <p className="text-gray-600 text-sm leading-relaxed">क्लबले आधुनिक डिजिटल बजार र भौतिक उत्पादनलाई कसरी सँगै लैजाने भन्ने व्यावहारिक तालिम र प्लेटफर्म प्रदान गर्दछ।</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl flex gap-4">
              <Globe className="text-blue-900 w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">ग) समुदायमा आधारित सामूहिक पूँजी</h4>
                <p className="text-gray-600 text-sm leading-relaxed">क्लबले "सामूहिक पूँजी र सामूहिक स्वामित्व" को अवधारणा ल्याउँछ, जसले गर्दा कम जोखिममा ठूला परियोजनाहरूमा हिस्सेदार बन्न सकिन्छ।</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl flex gap-4">
              <ShieldCheck className="text-blue-900 w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-1">घ) नैतिक र सीपयुक्त नेतृत्व विकास</h4>
                <p className="text-gray-600 text-sm leading-relaxed">यहाँ जोडिने सदस्यहरूलाई नैतिक शिक्षा, सामाजिक उत्तरदायित्व र प्राविधिक ज्ञान दिएर "आर्थिक योद्धा" का रूपमा तयार गरिन्छ।</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}