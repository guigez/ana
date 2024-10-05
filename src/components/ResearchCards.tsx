"use client"

import { FunctionComponent } from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Search } from "lucide-react";

interface CardPaper {
    title: string;
    href: string;
    openInNewTab?: boolean;
}

const CardPapers: CardPaper[] = [
    {
        title: "igital survey applied to the assessment of pathological manifestations in the architectural heritage of monte alegre in Piracicaba/SP. JOURNAL OF BUILDING PATHOLOGY AND REHABILITATION (PRINT), v. 8, p. 60, 2023.",
        href: "https://link.springer.com/article/10.1007/s41024-023-00306-1",
        openInNewTab: true
    },
    {
        title: "Critérios de qualidade de água para consumo humano e as diferentes normas brasileiras com foco nas substâncias químicas. Revista Ambiente, v. 1, p. 1-26, 2022.",
        href: "https://revista.cetesb.sp.gov.br/revista/article/view/179",
        openInNewTab: true
    },
];


interface CardConference {
    title: string;
    href: string;
    openInNewTab?: boolean;
}

const CardConferences: CardConference[] = [
    {
        title: "Green Infrastructures as mitigator of urbanization problems: a case study in the city of Sorocaba, São Paulo/Brazil. In: 6th International Conference on Energy and Environment, 2024, Guimarães. Proceedings of the 6th International Conference on Energy & Environment: Bringing together Engineering and Economics. Guimarães: University of Minho. Escola de Engenharia-Centro ALGORIMI, 2024. p. 253-258.",
        href: "https://link.springer.com/article/10.1007/s41024-023-00306-1",
        openInNewTab: true
    },
    {
        title: "The impact of land cover on surface temperature regulating service provided by green infrastructure: a case study in Campinas, Brazil. In: 6th International Conference on Energy and Environment, 2024, Guimarães. Proceedings of the 6th International Conference on Energy & Environment: Bringing together Engineering and Economics. Guimarães: University of Minho. Escola de Engenharia-Centro ALGORIMI, 2024. p. 287-293.",
        href: "https://revista.cetesb.sp.gov.br/revista/article/view/179",
        openInNewTab: true
    },
];


interface CardProject {
    title: string;
    href: string;
    openInNewTab?: boolean;
}

const CardProjects: CardProject[] = [
    {
        title: "PROPOSTA DE IMPLEMENTAÇÃO DE PROJETO INTEGRADOR NA DISCIPLINA DE PATOLOGIA DAS CONSTRUÇÕES. 2024. (Apresentação de Trabalho/Congresso).",
        href: "https://link.springer.com/article/10.1007/s41024-023-00306-1",
        openInNewTab: true
    },
    {
        title: "COMPARATIVO DE PRODUTIVIDADE ENTRE AS ABORDAGENS CAD E BIM 3D EM PROJETOS ELÉTRICOS: ESTUDO DE CASO EM UMA RESIDÊNCIA UNIFAMILIAR. 2024.",
        href: "https://revista.cetesb.sp.gov.br/revista/article/view/179",
        openInNewTab: true
    },
    {
        title:"THE IMPACT OF LAND COVER ON SURFACE TEMPERATURE REGULATING SERVICE PROVIDED BY GREEN INFRASTRUCTURE: A CASE STUDY IN CAMPINAS, BRAZIL. 2024.",
        href: "https://revista.cetesb.sp.gov.br/revista/article/view/179",
        openInNewTab: true
    }
];





const CardsParpes: FunctionComponent = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Papers</CardTitle>
                <CardDescription>Complete articles published in journals.</CardDescription>
            </CardHeader>
            <CardContent>
                {CardPapers.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        target={item.openInNewTab ? "_blank" : "_self"}
                        className="block py-2 flex hover:text-green-700 transition-colors duration-200"
                    >
                        {item.title}
                    </a>
                ))}
            </CardContent>
        </Card>
    )
}

const CardsConferences: FunctionComponent = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Conferences</CardTitle>
                <CardDescription>Complete works published in conference proceedings.</CardDescription>
            </CardHeader>
            <CardContent>
                {CardConferences.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        target={item.openInNewTab ? "_blank" : "_self"}
                        className="block py-2 flex hover:text-green-700 transition-colors duration-200"
                    >
                        {item.title}
                    </a>
                ))}
            </CardContent>
        </Card>
    )
}

const CardsProjects: FunctionComponent = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Work Presentations.</CardDescription>
            </CardHeader>
            <CardContent>
                {CardProjects.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        target={item.openInNewTab ? "_blank" : "_self"}
                        className="block py-2 flex hover:text-green-700 transition-colors duration-200"
                    >
                        {item.title}
                    </a>
                ))}
            </CardContent>
        </Card>
    )
}

export const ResearchCards: FunctionComponent = () => {
    return (
        <section className="space-y-8">
            <CardsParpes />
            <CardsConferences />
            <CardsProjects />
        </section>
    )
}