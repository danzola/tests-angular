export class Post {
    userId: number = 0;
    id: number = 0;
    title: string = '';
    body: string = '';
    
    get even(): boolean{
      return this.id % 2 === 0;
    }

    get treeMultiple(): boolean{
      return this.id % 3 === 0;
    }
  }