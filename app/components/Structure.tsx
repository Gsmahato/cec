interface Role {
  title: string;
  count: number;
  note: string;
}

export default function Structure() {
  const roles: Role[] = [
    { title: "प्रदेश संयोजक", count: 7, note: "(नेपालका ७ वटा प्रदेशका लागि)" },
    { title: "जिल्ला संयोजक", count: 77, note: "(नेपालका ७७ वटा जिल्लाका लागि)" },
    { title: "संघीय निर्वाचन क्षेत्र संयोजक", count: 165, note: "(प्रतिनिधि सभाका १६५ निर्वाचन क्षेत्र)" },
    { title: "प्रदेश निर्वाचन क्षेत्र संयोजक", count: 330, note: "(प्रदेश सभाका ३३० निर्वाचन क्षेत्र)" },
    { title: "स्थानीय तह संयोजक", count: 753, note: "(नेपालका ७५३ वटा स्थानीय पालिकाहरू)" },
    { title: "वडा संयोजक", count: 6743, note: "(नेपालभरिका कुल ६,७४३ वडाहरू)" },
    { title: "क्लबका सहयोगीहरू", count: 500, note: "" },
  ];

  return (
    <section id="structure" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main section heading optimized as the explicit title of the organizational list */}
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12 border-b-4 border-green-500 inline-block pb-2 mx-auto">
          संगठनात्मक संरचना (Total = 8575 Persons)
        </h2>

        {/* Wrapped the layout loop inside an ItemList context for crawlers */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {roles.map((role, index) => (
            <div 
              key={index} 
              className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition bg-gray-50"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {/* Meta position tag provides semantic list sequence to search engine scrapers */}
              <meta itemProp="position" content={String(index + 1)} />
              
              <span className="block text-4xl font-bold text-green-600 mb-2">
                {role.count.toLocaleString()}
              </span>
              
              {/* Highlighted the role title as the primary name attribute of the list element */}
              <h3 
                className="text-xl font-semibold text-blue-900"
                itemProp="name"
              >
                {role.title}
              </h3>
              
              <p className="text-gray-600 text-sm mt-1">{role.note}</p>
            </div>
          ))}
        </div>

        {/* Footer paragraph summary of your organizational goal data */}
        <p className="text-center mt-10 text-lg font-medium text-gray-700">
          जम्मा ८,५७५ जना संयोजकहरु सहभागी हुनेछन्। <br/>
          सहभागी संयोजकहरूको प्रति व्यक्ति आम्दानी $5000/- को लक्ष्य सहित प्रशिक्षणमा सहभागी हुनेछ।
        </p>
      </div>
    </section>
  );
}