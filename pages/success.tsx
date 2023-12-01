import { NextPage } from "next";
import Link from "next/link";

const Cancel: NextPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <p className="text-lg text-gray-800">
                Seu pedido não foi realizado,{" "}
                <Link href="/">
                    <a className="text-blue-500 hover:underline">clique aqui para retornar</a>
                </Link>{" "}

            </p>
        </div>
    );
};

export default Cancel;
