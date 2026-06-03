export default function PartnerCompanies(){
const companies=[
{name:'IBM',img:'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'},
{name:'Microsoft',img:'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'},
{name:'TCS',img:'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg'},
{name:'Infosys',img:'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg'}
]

return(
<section className="py-20 bg-blue-400">
<h2 className="text-5xl font-bold text-center mb-14">
Hiring Partners
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
{companies.map((company,index)=>(
<div key={index} className="bg-white p-8 rounded-3xl shadow-lg flex items-center justify-center">
<img src={company.img} alt={company.name} className="h-16 object-contain"/>
</div>
))}
</div>
</section>
)
}
