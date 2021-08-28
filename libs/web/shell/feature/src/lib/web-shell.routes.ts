import { Route } from '@angular/router';
import { LayoutComponent } from '@grailed/web/shell/ui/layout';

export const webShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@grailed/web/home/feature').then((m) => m.HomeModule),
      },
    ],
  },
];
