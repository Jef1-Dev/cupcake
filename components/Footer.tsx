import { NextPage } from "next";

const Footer: NextPage = () => {
    return (
        <div className="max-w-5xl mx-auto py-8">
            <div>
                <div className="bg-gray-100 p-4">
                    <div className="bg-white p-8">
                        <h1 className="text-4xl font-bold mb-6">Sobre Nós</h1>
                        <p className="text-lg mb-4">
                            Bem-vindo à <strong>CakeShop</strong>, desde o nosso início, nos comprometemos em oferecer experiências excepcionais, produtos de qualidade
                            e um atendimento que vai além das expectativas.
                        </p>
                        <p className="text-lg mb-4">
                            Junte-se a nós enquanto continuamos a explorar novos sabores!
                        </p>
                        <p className="text-lg">
                            Para entrar em contato conosco, utilize os seguintes meios:
                            <br />
                            <strong>Número de Contato:</strong> +55 51 9 9999-0001
                            <br />
                            <strong>Email:</strong> teste@gmail.com
                        </p>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Footer;
