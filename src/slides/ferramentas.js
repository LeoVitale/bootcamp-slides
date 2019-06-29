export default [
  {
    id: 'ferramentas-1',
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
  },
  {
    id: 'ferramentas-2',
    props: {
      bgImage: 'https://qph.fs.quoracdn.net/main-qimg-aea6d70e3db223864d778ee560ec62c0.webp',
      bgDarken: 0.8
    },
    contents: [
      {
        id: '2',
        type: 'Image',
        content: '',
        props: {
          src: 'https://qph.fs.quoracdn.net/main-qimg-aea6d70e3db223864d778ee560ec62c0.webp',
          margin: '50px auto'
        }
      }
    ]
  },
  {
    id: 'ferramentas-3',
    props: {
      bgImage: 'https://frontendmasters.com/books/front-end-handbook/2018/images/spectrum.png',
      bgDarken: 0
    },
    contents: []
  },
  {
    id: 'ferramentas-4',
    props: {
      bgImage: 'https://images.unsplash.com/photo-1553895501-af9e282e7fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      bgDarken: 0
    },
    contents: []
  },
  {
    id: 'ferramentas-5',
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
