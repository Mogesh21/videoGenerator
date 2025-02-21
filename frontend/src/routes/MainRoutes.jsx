import { lazy } from 'react';

import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import Fonts from 'pages/settings/Fonts';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const ImageGenerator = Loadable(lazy(() => import('pages/image-generator/ImageComp')));
const VideoGenerator = Loadable(lazy(() => import('pages/video-generator/VideoComp')));
const Images = Loadable(lazy(() => import('pages/file-manager/Images')));
const Videos = Loadable(lazy(() => import('pages/file-manager/Videos')));
const Projects = Loadable(lazy(() => import('pages/file-manager/Projects')));
const Create = Loadable(lazy(() => import('pages/create/CreateVideo')));
const Settings = Loadable(lazy(() => import('pages/settings/Settings')));
const Templates = Loadable(lazy(() => import('pages/settings/Templates')));
const CreateTemplate = Loadable(lazy(() => import('pages/settings/CreateTemplate')));
const EditTemplate = Loadable(lazy(() => import('pages/settings/EditTemplate')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/projects/videos/*',
      element: <Videos />
    },
    {
      path: '/create/new',
      element: <Create />
    },
    {
      path: '/settings/preferences',
      element: <Settings />
    },
    {
      path: '/settings/templates',
      element: <Templates />
    },
    {
      path: '/settings/templates/new',
      element: <CreateTemplate />
    },
    {
      path: '/settings/templates/edit',
      element: <EditTemplate />
    },
    {
      path: '/settings/fonts',
      element: <Fonts />
    }
    // {
    //   path: '/generate-image',
    //   element: <ImageGenerator />
    // },
    // {
    //   path: '/generate-video',
    //   element: <VideoGenerator />
    // }
    // {
    //   path: 'color',
    //   element: <Color />
    // },
    // {
    //   path: 'dashboard',
    //   children: [
    //     {
    //       path: 'default',
    //       element: <DashboardDefault />
    //     }
    //   ]
    // },
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // },
    // {
    //   path: 'shadow',
    //   element: <Shadow />
    // },
    // {
    //   path: 'typography',
    //   element: <Typography />
    // }
  ]
};

export default MainRoutes;
