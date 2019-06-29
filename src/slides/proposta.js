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
  }
];
