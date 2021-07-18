const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'affectionate' },
    'task-2': { id: 'task-2', content: 'engaged' },
    'task-3': { id: 'task-3', content: 'confident' },
    'task-4': { id: 'task-4', content: 'inspired' },
    'task-5': { id: 'task-5', content: 'grateful' },
    'task-6': { id: 'task-6', content: 'peaceful' },
    'task-7': { id: 'task-7', content: 'excited' },
    'task-8': { id: 'task-8', content: 'joyful' },
    'task-9': { id: 'task-9', content: 'happy' },
    'task-10': { id: 'task-10', content: 'refreshed' },
    'task-11': { id: 'task-11', content: 'hopeful' },
    'task-12': { id: 'task-12', content: 'exhilarated' },
    'task-13': { id: 'task-13', content: 'worried' },
    'task-14': { id: 'task-14', content: 'scared' },
    'task-15': { id: 'task-15', content: 'suspicious' },
    'task-16': { id: 'task-16', content: 'annoyed' },
    'task-17': { id: 'task-17', content: 'frustrated' },
    'task-18': { id: 'task-18', content: 'angry' },
    'task-19': { id: 'task-19', content: 'numb' },
    'task-20': { id: 'task-20', content: 'shocked' },
    'task-21': { id: 'task-21', content: 'embarrassed' },
    'task-22': { id: 'task-22', content: 'ashamed' },
    'task-23': { id: 'task-23', content: 'heartbroken' },
    'task-24': { id: 'task-24', content: 'sad' },
    'task-25': { id: 'task-25', content: 'depressed' },
    'task-26': { id: 'task-26', content: 'tense' },
    'task-27': { id: 'task-27', content: 'stressed' },
    'task-28': { id: 'task-28', content: 'vulnerable' },
    'task-29': { id: 'task-29', content: 'fragile' },
    'task-30': { id: 'task-30', content: 'shy' },
    'task-31': { id: 'task-31', content: 'jealous' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Feeling Words',
      taskIds: ['task-1', 	'task-2', 	'task-3', 	'task-4', 	'task-5', 	'task-6', 	'task-7', 	'task-8', 	'task-9', 	'task-10', 	'task-11', 	'task-12', 	'task-13', 	'task-14', 	'task-15', 	'task-16', 	'task-17', 	'task-18', 	'task-19', 	'task-20', 	'task-21', 	'task-22', 	'task-23', 	'task-24', 	'task-25', 	'task-26', 	'task-27', 	'task-28', 	'task-29', 	'task-30', 	'task-31'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Maybe I feel?',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Alive In Me',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;
