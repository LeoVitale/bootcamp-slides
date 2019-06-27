import image from '../assets/images/globo-reporter.png';

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
    id: '4',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'Front-End Developers',
        props: { textAlign: 'left', size: 2 }
      },
      {
        id: '2',
        type: 'Text',
        content: 'Timebox (40 minutos)',
        props: { textAlign: 'left' }
      }
    ]
  },
  {
    id: '5',
    contents: [
      {
        id: '2',
        type: 'Image',
        content: '',
        props: {
          src: image,
          margin: '50px 0 0'
        }
      }
    ]
  },
  {
    id: '6',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'Ferramentas',
        props: { textAlign: 'left', size: 2 }
      },
      {
        id: '2',
        type: 'Text',
        content: 'Timebox (20 minutos)',
        props: { textAlign: 'left' }
      }
    ]
  }
];
