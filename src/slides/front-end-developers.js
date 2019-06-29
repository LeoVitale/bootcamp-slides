import globo from '../assets/images/globo-reporter.png';
import frontui from '../assets/images/front.jpeg';

export default [
  {
    id: 'front-1',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'Front-End',
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
    id: 'front-2',
    props: {
      bgImage: globo,
      bgDarken: 0.8
    },
    contents: [
      {
        id: '2',
        type: 'Image',
        content: '',
        props: {
          src: globo,
          margin: '50px auto'
        }
      }
    ]
  },
  {
    id: 'front-3',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'Espécies de Front-Enders',
        props: { textAlign: 'left', size: 3 }
      }
    ]
  },
  {
    id: 'front-4',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'Foco em UI',
        props: { textAlign: 'left', size: 3 }
      }
    ]
  },
  {
    id: 'front-5',
    contents: [
      {
        id: '1',
        type: 'Heading',
        content: 'Foco em Engenharia',
        props: { textAlign: 'left', size: 3 }
      }
    ]
  },
  {
    id: 'front-6',
    props: {
      bgImage: frontui,
      bgDarken: 0.8
    },
    contents: [
      {
        id: '2',
        type: 'Image',
        content: '',
        props: {
          src: frontui,
          margin: '-40px auto 0'
        }
      }
    ]
  },
  {
    id: 'front-7',
    props: {
      bgImage: 'https://media.giphy.com/media/xZqycRHIQkKNa/giphy.gif',
      bgDarken: 0.5
    },
    contents: [
      {
        id: '2',
        type: 'Image',
        content: '',
        props: {
          src: 'https://media.giphy.com/media/xZqycRHIQkKNa/giphy.gif',
          margin: '50px auto'
        }
      }
    ]
  },
  {
    id: 'front-8',
    contents: [
      {
        id: '2',
        type: 'Image',
        content: '',
        props: {
          src: 'https://media.giphy.com/media/uOZg6EKGGZG5G/giphy.gif',
          margin: '50px auto'
        }
      }
    ]
  },
  {
    id: 'front-9',
    contents: [
      {
        id: '2',
        type: 'Image',
        content: '',
        props: {
          src: 'https://media.giphy.com/media/ql89wsWoAgTAI/giphy.gif',
          margin: '50px auto'
        }
      }
    ]
  },
  {
    id: 'front-10',
    contents: [
      {
        id: '2',
        type: 'Image',
        content: '',
        props: {
          src: 'https://media.giphy.com/media/EeKAJaMxmVLwc/giphy.gif',
          margin: '50px auto'
        }
      }
    ]
  }
];
