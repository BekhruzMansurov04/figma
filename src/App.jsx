
function App() {


  return (
    <>
     <div className="font-sans bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-xl font-bold">DESIGNZCY</h1>
        <ul className="flex gap-6">
          <li className="text-orange-500 font-semibold">Home</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Contact us</button>
      </nav>

      {/*Section */}
      <header className="text-center py-20">
        <h2 className="text-4xl font-bold">Smart Web Design Agency</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          We provide the best web design and business development services with a satisfaction guarantee.
        </p>
        <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg">Free Consultation</button>
      </header>

      
      <section className="text-center py-10 bg-white">
        <h3 className="text-2xl font-semibold">We Provide the Best Web Services</h3>
        <div className="grid grid-cols-3 justify-center gap-10 mt-6">
          <div className="text-green-500">
            <p className="text-2xl font-bold">5200+</p>
            <p>Projects Completed</p>
          </div>
          <div className="text-blue-500">
            <p className="text-2xl font-bold">500+</p>
            <p>Active Clients</p>
          </div>
          <div className="text-red-500">
            <p className="text-2xl font-bold">4500+</p>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 text-center">
  <h3 className="text-2xl font-semibold">What Service We’re Offering</h3>
  <div className="flex justify-center gap-10 mt-6">
    <div className="p-6 bg-gray-200 rounded-lg w-64">
      <h4 className="font-bold">Website Design</h4>
      <p className="text-gray-600 mt-2">
        Need something changed, or something not quite working? Get the best service.
      </p>
    </div>
    <div className="p-6 bg-gray-200 rounded-lg w-64">
      <h4 className="font-bold">Web Development</h4>
      <p className="text-gray-600 mt-2">
        Need something changed, or something not quite working? Get the best service.
      </p>
    </div>
    <div className="p-6 bg-gray-200 rounded-lg w-64">
      <h4 className="font-bold">Web Application</h4>
      <p className="text-gray-600 mt-2">
        Need something changed, or something not quite working? Get the best service.
      </p>
    </div>
  </div>
</section>
    </div>
    </>
  )
}

export default App
