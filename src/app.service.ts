import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getRows(q = '') {
    const rows = [
      { id: 1, name: 'Lorem', type: 'ipsum', description: 'dolor', status: 'sit' },
      { id: 2, name: 'amet', type: 'consectetur', description: 'adipiscing', status: 'elit' },
      { id: 3, name: 'Integer', type: 'nec', description: 'odio', status: 'Praesent' },
      { id: 4, name: 'libero', type: 'Sed', description: 'cursus', status: 'ante' },
      { id: 5, name: 'dapibus', type: 'diam', description: 'Sed', status: 'nisi' },
      { id: 6, name: 'Nulla', type: 'quis', description: 'sem', status: 'at' },
      { id: 7, name: 'nibh', type: 'elementum', description: 'imperdiet', status: 'Duis' },
      { id: 8, name: 'sagittis', type: 'ipsum', description: 'Praesent', status: 'mauris' },
      { id: 9, name: 'Fusce', type: 'nec', description: 'tellus', status: 'sed' },
      { id: 10, name: 'augue', type: 'semper', description: 'porta', status: 'Mauris' },
      { id: 11, name: 'massa', type: 'Vestibulum', description: 'lacinia', status: 'arcu' },
      { id: 12, name: 'eget', type: 'nulla', description: 'Class', status: 'aptent' },
      { id: 13, name: 'taciti', type: 'sociosqu', description: 'ad', status: 'litora' },
      { id: 14, name: 'torquent', type: 'per', description: 'conubia', status: 'nostra' },
      { id: 15, name: 'per', type: 'inceptos', description: 'himenaeos', status: 'Curabitur' },
      { id: 16, name: 'sodales', type: 'ligula', description: 'in', status: 'libero' },
    ];
    if (!q) return rows;
    return rows.filter(row => row.name.toLowerCase().includes(q.toLowerCase()));
  }
}
