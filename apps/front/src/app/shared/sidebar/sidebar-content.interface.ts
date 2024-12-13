export interface ISidebarContent {
  parent: {
    title: string;
    icon: string;
    children: ISidebarContentChildren[]
  };
}

interface ISidebarContentChildren {
  name: string;
  icon: string;
  routerLink?: string;
}
