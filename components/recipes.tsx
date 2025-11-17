import { Badge } from '@/components/ui/badge';

export default function Recipes() {
  const recipes = [
    {
      id: '1',
      name: 'Cajun Seafood Boil',
      image: '/seafood-boil-cajun.jpg',
      description: 'Classic Louisiana seafood boil with crab, shrimp, and crawfish',
    },
    {
      id: '2',
      name: 'Garlic Butter Shrimp',
      image: '/garlic-butter-shrimp-pan.jpg',
      description: 'Quick pan-seared shrimp with aromatic garlic and butter sauce',
    },
    {
      id: '3',
      name: 'Spicy Crab Cakes',
      image: '/crab-cakes-seasoning.jpg',
      description: 'Golden-fried crab cakes packed with our signature Cajun spices',
    },
  ];

  return (
    <section id="recipes" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-12">
          Customer Favorite Recipes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  Made with Jazzyjeatz
                </Badge>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{recipe.name}</h3>
              <p className="text-muted-foreground text-sm">{recipe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
