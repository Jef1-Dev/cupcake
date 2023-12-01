import { NextPage } from "next";

const Title: NextPage = () => {
    return (
        <div className="max-w-5xl mx-auto py-8">
            <div>

                <div className="bg-gray-100 p-4">
                    <h1 className="font-semibold tracking-wide leading-10 text-xl lg:text-3xl">Bem-vindo à CakeShop</h1>
                    <p className="text-lg mb-2">
                        O refúgio dos amantes de doces! Nossos cupcakes são obras de arte comestíveis, preparados com ingredientes frescos e de alta qualidade.
                    </p>
                    <p>
                        Cada mês é uma nova oportunidade para nossos talentosos confeiteiros explorarem novos sabores,
                        ingredientes frescos e designs cativantes, nossos cupcakes sazonais são cuidadosamente elaborados para
                        proporcionar uma experiência gustativa única e surpreendente.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Title;