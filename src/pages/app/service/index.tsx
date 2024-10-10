
import React from 'react'
import { ServiceContainer } from './components/ServiceContainer'
export function Service() {
  return (
    <div className="flex flex-col items-center justify-center w-full">

      <h2 className='font-Josefin font-bold text-6xl text-yellow-300 my-5'>Nossos Serviços</h2>

      <ServiceContainer
        title='Casamento '
        content='Nosso buffet de eventos transforma casamentos em celebrações inesquecíveis. Oferecemos um menu personalizado, decoração elegante e um serviço impecável para garantir que cada detalhe do seu grande dia seja perfeito. Desde a recepção até a festa, cuidamos de tudo para que você possa aproveitar cada momento com seus convidados. '
      />
      <ServiceContainer
        title='Formatura '
        content='Celebre a conquista da formatura com estilo e sofisticação em nosso buffet de eventos. Oferecemos um ambiente moderno e acolhedor, com opções de menu que agradam a todos os paladares. Nossa equipe está preparada para organizar uma festa memorável, com música, decoração temática e todos os detalhes que fazem a diferença. '
      />
      <ServiceContainer
        title='Festa Corporativa '
        content='Para eventos corporativos, nosso buffet oferece um serviço profissional e de alta qualidade. Seja para uma confraternização, lançamento de produto ou reunião de negócios, garantimos um ambiente adequado e um menu diversificado que atende às necessidades de todos os participantes. Transforme seu evento corporativo em uma experiência única e bem-sucedida. '
      />
      <ServiceContainer
        title='Festa de Debudante '
        content='A festa de debutante é um momento especial e merece uma celebração à altura. Nosso buffet de eventos oferece pacotes completos que incluem decoração temática, cardápio variado e uma equipe dedicada para tornar essa noite inesquecível. Cada detalhe é pensado para que a debutante e seus convidados vivam uma experiência mágica. '
      />
      <ServiceContainer
        title='Festas Infantis '
        content='Para festas infantis, nosso buffet oferece um ambiente divertido e seguro, com opções de entretenimento e um cardápio adaptado para os pequenos. Desde a decoração temática até as atividades recreativas, cuidamos de tudo para que a festa seja um sucesso e as crianças se divirtam ao máximo. '
      />
      <ServiceContainer
        title='Bodas '
        content='Comemore suas bodas com elegância e charme em nosso buffet de eventos. Oferecemos um ambiente acolhedor e sofisticado, com um menu personalizado que reflete o gosto do casal. Nossa equipe está pronta para cuidar de todos os detalhes, garantindo que essa data especial seja celebrada de forma memorável. '
      />
      <ServiceContainer
        title='Batizados '
        content='Para batizados, nosso buffet oferece um ambiente tranquilo e acolhedor, perfeito para celebrar esse momento importante em família. Oferecemos um menu variado e decoração delicada, criando uma atmosfera de paz e alegria. Nossa equipe está à disposição para garantir que tudo saia conforme planejado. '
      />
      <ServiceContainer
        title='Reuniões Religiosas '
        content='Nosso buffet de eventos é ideal para reuniões religiosas, oferecendo um espaço adequado e um serviço atencioso. Com um menu adaptado às necessidades do evento e uma decoração respeitosa, garantimos que sua reunião religiosa seja realizada com a devida reverência e conforto para todos os participantes. '
      />


    </div>
  )
}