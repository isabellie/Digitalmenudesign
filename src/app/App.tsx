import { MenuItem } from './components/MenuItem';
import { MenuSection } from './components/MenuSection';
import logo from 'figma:asset/cb58cee0b3cb501980db1afb6c21eea550dcb8f3.png';

export default function App() {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden flex flex-col">
      {/* Header */}
      <header className="bg-[#cf112e] text-white py-4 px-8 shadow-lg">
        <div className="max-w-[1920px] mx-auto flex items-center gap-4">
          <div className="w-32 h-32 flex items-center justify-center">
            <img src={logo} alt="YX Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-4xl">Nygårdsjøen</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1920px] mx-auto px-8 py-6 overflow-hidden">
        <div className="grid grid-cols-3 gap-8 h-full">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Burgers Section */}
            <section>
              <h2 className="text-2xl mb-3 pb-2 border-b-2 border-[#cf112e]">Burgermeny</h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                <div>
                  <h3 className="mb-1">Beef Burger</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">100g</span>
                      <span>139,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">150g</span>
                      <span>159,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">200g</span>
                      <span>179,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">300g</span>
                      <span>229,-</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <h3 className="mb-1">Cheese Burger</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">100g</span>
                      <span>151,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">150g</span>
                      <span>170,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">200g</span>
                      <span>190,-</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <h3 className="mb-1">Bacon & Cheese Burger</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">100g</span>
                      <span>174,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">150g</span>
                      <span>193,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">200g</span>
                      <span>213,-</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sausages Section */}
            <section>
              <h2 className="text-2xl mb-3 pb-2 border-b-2 border-[#cf112e]">Pølsemeny</h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Grillpølse</span>
                  <span>72,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Burger Dog</span>
                  <span>69,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Ost & Bacon Pølse</span>
                  <span>74,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Pølse m/Pommes Frites</span>
                  <span>95,-</span>
                </div>
              </div>
            </section>
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            {/* Plate Dishes Section */}
            <section>
              <h2 className="text-2xl mb-3 pb-2 border-b-2 border-[#cf112e]">Tallerkenretter m/pommes frites</h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Kyllingtallerken</span>
                  <span>229,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Biffsnadder</span>
                  <span>000,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Lvstek</span>
                  <span>179,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Kyllingnuggets 5 stk.</span>
                  <span>149,-</span>
                </div>
              </div>
            </section>

            {/* Extras/Sides Section */}
            <section>
              <h2 className="text-2xl mb-3 pb-2 border-b-2 border-[#cf112e]">Tilbehør</h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Ost</span>
                  <span>16 kr</span>
                </div>
                <div className="flex justify-between">
                  <span>Bacon</span>
                  <span>18 kr</span>
                </div>
                <div className="flex justify-between">
                  <span>Råløk</span>
                  <span>7,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Sprøstekt løk</span>
                  <span>7,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Rekesalat</span>
                  <span>10 kr</span>
                </div>
                <div className="flex justify-between">
                  <span>Potetsalat</span>
                  <span>10 kr</span>
                </div>
                <div className="flex justify-between">
                  <span>Potetmos</span>
                  <span>39 kr</span>
                </div>
                <div className="flex justify-between">
                  <span>Pommes frites</span>
                  <span>55 kr</span>
                </div>
                <div className="flex justify-between">
                  <span>Ekstra dressing</span>
                  <span>19 kr</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span>Drikke til maten</span>
                  <span>+30,-</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Drinks Section */}
            <section>
              <h2 className="text-2xl mb-3 pb-2 border-b-2 border-[#cf112e]">Softis</h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Liten</span>
                  <span>59 kr</span>
                </div>
                <div className="flex justify-between">
                  <span>Stor</span>
                  <span>69 kr</span>
                </div>
                <div className="flex justify-between">
                  <span>Strøssel</span>
                  <span>7 kr</span>
                </div>
              </div>
            </section>

            {/* Food Images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1610440042657-612c34d95e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwYnVyZ2VyJTIwZ291cm1ldHxlbnwxfHx8fDE3NzMyMTgxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Burger"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1771818708882-bd87d9c46297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBidXJnZXIlMjBkZWxpY2lvdXN8ZW58MXx8fHwxNzczMzEyODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cheese Burger"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1655176649153-8bd6a37e4383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwc2F1c2FnZSUyMGhvdCUyMGRvZ3xlbnwxfHx8fDE3NzMzMTI4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hot Dog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1717294978892-cef673e1d17b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmllcyUyMGdvbGRlbnxlbnwxfHx8fDE3NzMyNDA5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fries"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}