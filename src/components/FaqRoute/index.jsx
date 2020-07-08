import React from "react";

import { Container } from "./styles";

import moment from "../../store/moment";
import { getEvents } from "../../store/localData";

function FaqRoute({ match }) {
    const targetEvent = getEvents().find((event) => event.id === match.params.id);

    targetEvent.startDate = moment(targetEvent.startDate);
    targetEvent.endDate = moment(targetEvent.endDate);
    targetEvent.startSubDate = moment(targetEvent.startSubDate);
    targetEvent.endSubDate = moment(targetEvent.endSubDate);

    return (
        <Container>
            <div className="faq-title">
                <h1>F.A.Q.</h1>
            </div>
            Todos as equipes precisam possuir no mínimo NÚMERO DE PARTICIPANTES NO RANK integrantes independente do skill de atuação que tenham
            experiência anterior comprovada em participação em hackathons, como por exemplo integrante com pontuação igual ou superior a NÚMERO DE
            PONTOS NO RANK pontos no Mega Rank (megarank.shawee.io/). Os demais participantes ficam isentos da necessidade, caso NÚMERO DE
            PARTICIPANTES NO RANK integrantes cumpram a regra de pontuação. A propriedade intelectual da solução que foi desenvolvida é do grupo que a
            criou. É uma premissa básica que a Shawee não abre mão. As inscrições podem acontecer de forma individual, porém, respeitando a capacidade
            máxima de NÚMERO MÁXIMO DE PARTICIPANTES pessoas. Caso você tenha realizado a inscrição de forma individual, os dois primeiros dias serão
            focados na formação de times entre esses participantes. Os participantes do NOME DO HACKATHON devem se enquadrar em algum dos seguintes
            perfis: Especialista em Negócios, Marketing, Engenharia, Logística, UX/designer, Desenvolvedor, ALGUMA OUTRA ÁREA ESPECÍFICA ou áreas
            correlatas. "Todo processo de mentoria é acompanhado via plataforma Shawee e Discord App. As pessoas que participam da mentoria atendem os
            grupos individualmente e, após cada rodada, o ciclo se repete com o próximo grupo que marcou um horário com o mentor. Segue um breve
            tutorial de como realizar o agendamento da mentoria com o @ShaweeBot: 1º Vá na conversa privada com o @ShaweeBOT e envie uma das
            palavras-chaves a seguir: “ajuda”, “comandos” ou “help” 2º Para visualizar as mentorias disponíveis digite “lista de mentorias” ou apenas
            “mentorias” 3º Após combinar com seu time qual é a melhor mentoria, agende um horário digitando “agendar mentoria #ID_DA_MENTORIA” ou
            apenas “agendar mentoria ID_DA_MENTORIA” (sem a hashtag) A imagem abaixo ilustra como funciona O ID da mentoria: INSERIR IMAGEM (TA NO
            WORD) Seguiu esses passos? Agora o ShaweeBot enviará um e-mail para o mentor deixando todo o time em cópia (CC), o mentor conduzirá o
            restante da jornada para que vocês encontrem a melhor plataforma para as sessões de mentoria. " É ser a luz no fim do túnel! Os mentores
            são pessoas com domínio de campo e experiência para dar conselhos que realmente funcionam. Importante lembrar que nenhum deles vai dar
            respostas para o grupo, mas sim estimular o time para que encontrem as respostas que precisam. Os mentores existem para gerar
            “provocações”, mas não entenda isso como algo ruim, “construtivo” é a palavra da vez aqui. Nadinha! Zero reais! Nothing! Você não precisa
            pagar para se inscrever e participar do hackathon. Participar de hackathons pode contribuir (e MUITO) para sua carreira, ser um
            potencializador de oportunidades, conectá-lo com o mercado de grandes empresas e startups. Além disso, é uma chance de trabalhar a
            comunicação, aprender com as skills do próximo, exercitar a cooperatividade e sua habilidade de escutar. A inscrição é individual, mesmo
            para os participantes que já tenham um time formado. Se você não conhece ninguém que toparia participar disso com você, não se preocupe!
            No início do hackathon será liberado acesso ao nosso canal no Discord App, assim todos poderão se conectar entre si para formar novos
            times e/ou incluir mais integrantes (claro, tudo dentro das diretrizes do regulamento). Sim, essa é a beleza do hackathon online: não tem
            fronteiras! Você pode participar de qualquer lugar do mundo. "1° Lugar - INSERIR PRÊMIO 2° Lugar - INSERIR PRÊMIO 3° Lugar - INSERIR
            PRÊMIO Lembrando que esses valores deverão ser divididos entre os integrantes do time. " O certificado é emitido ao término do hackathon
            na própria plataforma da Shawee, porém é necessário que o time tenha realizado submissão do projeto para ter acesso à essa solicitação.
            Caso contrário, não será possível emiti-lo. Sim as horas são evidenciadas no certificado O entregável é o projeto que foi desenvolvido
            durante o hackathon, e você pode disponibilizá-lo de diversas formas. Mas. para esse hackathon específico, pedimos que a submissão seja
            realizada através da plataforma da Shawee. Você precisará fazer a submissão, obrigatoriamente, na plataforma da Shawee, até a data limite
            da submissão. Para entender melhor como realizá-la, siga as instruções disponíves aqui (https://shawee-oficial.gitbook.io/shawee/). "Na
            nossa plataforma você unificará a submissão, assim poderemos ter ciência de todos os projetos. Nesta etapa você precisa publicar os
            seguintes arquivos: - Link do vídeo de até 3 minutos falando sobre a solução e navegando no protótipo, não fazer vídeo self (obrigatório
            que vídeo esteja no YouTube) - Vídeo demo; - Apresentação explicando a solução. (obrigatório utilizar formato .pdf) - Ideia; - Link
            público do repositório (github ou similar) onde está hospedada sua solução (obrigatório) - Protótipo; " Outra grande vantagem do hackathon
            online é a flexibilidade. Tem mais tempo durante a madrugada? Tudo bem! Combine com seu time o melhor esquema de trabalho para todos e
            submetam o projeto a tempo que tudo ficará bem. As inscrições dão início no dia DATA DO INÍCIO, e vão até o dia DATA DO FINAL DAS
            INSCRIÇÕES. "Live de preparação - DATA DA PRIMEIRA a DATA DA ÚLTIMA Live de abertura - DATA Formação de times - DATA Mentorias - DATA DA
            PRIMEIRA a DATA DA ÚLTIMA Coding time e mentorias - DATA Submissão de projetos - DATA Avaliação dos projetos - DATA DA PRIMEIRA a DATA DA
            ÚLTIMA Live divulgação dos resultados - DATA às HORÁRIO " "a) Criatividade e originalidade: O quão o projeto apresentado demonstra
            originalidade e criatividade não apresentando apenas uma cópia de outras soluções já existentes em diferentes segmentos; b)
            Aplicabilidade: O quão o projeto apresentado demonstra potencial para para solucionar os problemas atinentes ao desafio proposto; c)
            Qualidade do protótipo: O quão o protótipo exibido no vídeo de demonstração apresenta aparente qualidade em suas funcionalidades; d)
            Tecnologia: O quão a solução faz uso de tecnologias consideradas disruptivas e que te fato pode oferecer escala ao projeto; e e) Elemento
            Futuro: O quão a solução apresentada demonstra elementos ligados a tendências futuristas; A avaliação dos Projetos será realizada pela
            Banca Avaliadora, segundo os critérios definidos nos itens acima e as normas deste Regulamento. " Os prêmios serão entregues em até 30
            dias úteis após a data da divulgação dos resultados, sem qualquer ônus aos contemplados. O prêmio será pago em cartão de débito sem função
            de saque, e não é permitido pagamento via transferência bancária. Você pode participar mesmo não tendo pontos no Mega Rank, porém todas as
            equipes precisam possuir no mínimo Número de participantes no rank integrantes independente do skill de atuação que tenham experiência
            pontuação igual ou superior a Número de pontos no rank pontos no Mega Rank . Envie um e-mail para hi@shawee.io, ficaremos felizes em te
            ajudar.
        </Container>
    );
}

export default FaqRoute;
