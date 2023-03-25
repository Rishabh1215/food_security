import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'MacroEconomic',
    // path: '/macroeconomic',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'GDP',
        // path: '/macroeconomic/gdp',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'FDI Inflows',
        // path: '/macroeconomic/fdiinflows',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'FDI Outflows',
        // path: '/macroeconomic/fdioutflows',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: 'Agricultural',
    // path: '/agricultural',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Contributions of Agri (%GDP)',
        // path: '/agricultural/agricultural1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Credit',
        // path: '/agricultural/agricultural2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Fertilizers',
        // path: '/agricultural/agricultural3',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Fertilizers PROD',
        // path: '/agricultural/agricultural3',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Debt Services',
    // path: '/debtservices',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reserves',
        // path: '/debtservices/reserves',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'GNI',
        // path: '/debtservices/message2',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Total Debt (%)',
        // path: '/debtservices/message2',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
