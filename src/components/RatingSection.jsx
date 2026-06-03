export default function RatingSection(){
return(
<section className="py-20 bg-blue-400">
<h2 className="text-5xl font-bold text-center mb-14">
Student Reviews
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
{[1,2,3].map((item)=>(
<div key={item} className="bg-gray-100 rounded-3xl p-8 shadow-lg">
<div className="text-yellow-500 text-3xl">★★★★★</div>
<h3 className="text-2xl font-bold mt-4">Excellent Training</h3>
<p className="mt-4 text-gray-600">
Best institute for Java Full Stack and MERN stack training with placement support.
</p>
</div>
))}
</div>
</section>
)
}
