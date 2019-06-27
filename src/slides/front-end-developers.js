import image from '../assets/images/globo-reporter.png';

export default [
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
  }
];
