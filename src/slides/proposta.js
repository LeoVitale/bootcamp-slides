export default [
  {
    id: 'proposta-1',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'Proposta do Bootcamp',
        props: { textAlign: 'left', size: 2 }
      },
      {
        id: '2',
        type: 'Text',
        content: 'Timebox (25 minutos)',
        props: { textAlign: 'left' }
      }
    ]
  },
  {
    id: 'proposta-2',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'Missão',
        props: { textAlign: 'left', size: 4 }
      },
      {
        id: '2',
        type: 'Text',
        content: 'Promover interatividade que proporcione a troca de conhecimento coletivo.',
        props: { textAlign: 'left', textSize: '1em'  }
      },
    ]
  },
  {
    id: 'proposta-3',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'O que essa jornada contempla?',
        props: { textAlign: 'left', size: 4 }
      },
      {
        id: '2',
        type: 'Text',
        animated: true,
        content: 'Básico de HTML, CSS e JS',
        props: { textAlign: 'left', textSize: '1em'  }
      },
      {
        id: '3',
        type: 'Text',
        animated: true,
        content: 'Introdução a bibliotecas avançadas (React, Sass, GIT...)',
        props: { textAlign: 'left', textSize: '1em'  }
      },
      {
        id: '4',
        type: 'Text',
        animated: true,
        content: 'Básico de Agile',
        props: { textAlign: 'left', textSize: '1em'  }
      },
      {
        id: '5',
        type: 'Text',
        animated: true,
        content: 'TCC',
        props: { textAlign: 'left', textSize: '1em'  }
      },
    ]
  },
  {
    id: 'proposta-4',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'O que essa jornada NÃO contempla?',
        props: { textAlign: 'left', size: 4 }
      },
      {
        id: '2',
        type: 'Text',
        animated: true,
        content: 'Lógica de programação',
        props: { textAlign: 'left', textSize: '1em'  }
      },
      {
        id: '3',
        type: 'Text',
        animated: true,
        content: 'Conhecimentos avançados como performance, refactoring...',
        props: { textAlign: 'left', textSize: '1em'  }
      },
      {
        id: '4',
        type: 'Text',
        animated: true,
        content: 'UX, Design Digital',
        props: { textAlign: 'left', textSize: '1em'  }
      }
    ]
  },
  {
    id: 'proposta-5',
    props: {
      bgImage: 'https://media.giphy.com/media/yvFyW3wDdrTDq/giphy.gif',
      bgDarken: 0.5
    },
    contents: [
      {
        id: '3',
        type: 'Heading',
        animated: true,
        content: 'Porta de Entrada',
        props: { textAlign: 'left', size: 4, textColor: '#fff' }
      }
    ]
  },
  {
    id: 'proposta-6',
    contents: [
      {
        id: '3',
        type: 'Heading',
        animated: true,
        content: 'Dúvidas?',
        props: { size: 2 }
      }
    ]
  }
];
