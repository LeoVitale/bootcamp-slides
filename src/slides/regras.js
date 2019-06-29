export default [
    {
      id: 'regras-1',
      contents: [
        {
          id: '1',
          type: 'Heading',
          content: 'Regras de Ouro',
          props: { textAlign: 'left', size: 2 }
        },
        {
          id: '2',
          type: 'Text',
          content: 'Timebox (15 minutos)',
          props: { textAlign: 'left' }
        }
      ]
    },
    {
        id: 'regras-2',
        contents: [
          {
            id: '1',
            type: 'Text',
            animated: true,
            content: 'Respeite o amiguinho!',
            props: { textAlign: 'left', margin: '30px 0' }
          },
          {
            id: '2',
            type: 'Text',
            animated: true,
            content: 'Aprenda a trabalhar com diferenças!',
            props: { textAlign: 'left', margin: '30px 0' }
          },
          {
            id: '2',
            type: 'Text',
            animated: true,
            content: 'Participe!',
            props: { textAlign: 'left', margin: '30px 0' }
          },
          {
            id: '3',
            type: 'Text',
            animated: true,
            content: 'Erre bastante!',
            props: { textAlign: 'left', margin: '30px 0' }
          },
          {
            id: '4',
            type: 'Text',
            animated: true,
            content: 'Pergunte muito!',
            props: { textAlign: 'left', margin: '30px 0' }
          },
        ]
      },
      {
        id: 'regras-3',
        props: {
          bgImage: 'https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif',
          bgDarken: 0.5
        },
        contents: [
          {
            id: '1',
            type: 'Heading',
            content: 'Divirta-se :-)',
            props: { textAlign: 'left', size: 2, textColor: '#fff' }
          }
        ]
      }
  ];
  