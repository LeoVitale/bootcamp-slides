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
    id: 'front-6',
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
    id: 'front-7',
    props: {
      bgImage: 'https://techcrunch.com/wp-content/uploads/2015/04/matrix-operator.jpg',
      bgDarken: 0.8
    },
    contents: [
      {
        id: '2',
        type: 'Image',
        content: '',
        props: {
          src: 'https://techcrunch.com/wp-content/uploads/2015/04/matrix-operator.jpg',
          margin: '50px auto'
        }
      }
    ]
  },
  {
    id: 'front-8',
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
    id: 'front-9',
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
