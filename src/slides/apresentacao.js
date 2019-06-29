export default [
  {
    id: '1',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'Bootcamp',
        props: { textAlign: 'left', size: 2 }
      },
      {
        id: '2',
        type: 'Text',
        content: 'Front-End',
        props: { textAlign: 'left' }
      }
    ]
  },
  {
    id: '2',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'Apresentação',
        props: { textAlign: 'left', size: 2 }
      },
      {
        id: '2',
        type: 'Text',
        content: 'Timebox (30 minutos)',
        props: { textAlign: 'left' }
      }
    ]
  },
  {
    id: '3',
    props: {
      bgImage: 'https://media.giphy.com/media/94iS62lx8CRQA/giphy.gif',
      bgDarken: 0.5
    },
    contents: [
      {
        id: '1',
        type: 'Text',
        animated: true,
        content: 'Quem sou eu?',
        props: { textAlign: 'left', textColor: '#fff', margin: '30px 0' }
      },
      {
        id: '2',
        type: 'Text',
        animated: true,
        content: 'Porque estou aqui?',
        props: { textAlign: 'left', textColor: '#fff', margin: '30px 0' }
      },
      {
        id: '3',
        type: 'Text',
        animated: true,
        content: 'O que espero aprender?',
        props: { textAlign: 'left', textColor: '#fff', margin: '30px 0' }
      },
      {
        id: '4',
        type: 'Text',
        animated: true,
        content: 'O que espero compartilhar?',
        props: { textAlign: 'left', textColor: '#fff', margin: '30px 0' }
      }
    ]
  }
];
