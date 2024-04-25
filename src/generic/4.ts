/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageDetails {
  title: string;
}

class Component<T extends Record<string, any>> {
  constructor(public props: T) {}
}

class Page<T extends PageDetails> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
