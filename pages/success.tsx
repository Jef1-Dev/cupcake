import { NextPage } from "next";
import Link from "next/link";

const Success: NextPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <p className="text-lg text-gray-800">
                Seu pedido foi realizado com sucesso, o produto será preparado para o envio.{" "}
                <Link href="/">
                    <a className="text-blue-500 hover:underline">Clique aqui se quiser retornar à página inicial.</a>
                </Link>{" "}

            </p>
        </div>
    );
};

export default Success;
