"use client";

import { FunctionComponent } from "react";

import Typewriter from 'typewriter-effect';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Icons } from "./icons";

export const Banner: FunctionComponent = () => {
    return (
        <section>
            <div>
                <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                    <Avatar className="w-64 h-64 md:order-last">
                        <AvatarImage src="https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2717658P3" />
                        <AvatarFallback>AN</AvatarFallback>
                    </Avatar>
                    <h1 className="text-6xl font-bold">Hello, I am
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('Researcher')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('Engineer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('Developer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('Ana')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </h1>
                </div>
                <p className="text-xl text-muted-foreground text-center md:text-justify mt-8">Environmental Engineer and Master in Technology in the subfield of Environment from the State University of Campinas, with a focus on Ecosystem Services and Green Infrastructure. </p>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-8">
                <a href='https://www.linkedin.com/in/anafavoreti/'>
                    <Icons.linkedin className="w-12 h-12 fill-current" />
                </a>
                <a href='http://lattes.cnpq.br/7704132989148348'>
                    <Icons.lattes className="w-12 h-12 fill-current" />
                </a>
                <a href='https://scholar.google.com/citations?hl=pt-BR&user=TL64guAAAAAJ'>
                    <Icons.google_scholar className="w-12 h-12 fill-current"/>
                </a>
            </div>
        </section>
    )
}