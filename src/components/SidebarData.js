import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Macroeconomic (USD)',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'GDP (USD)',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'FDI Inflows (USD)',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'FDI Outflows (USD)',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: 'Agricultural',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Contributions of Agri (%GDP)',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Credit',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
      {
        title: 'Fertilizers',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Fertilizers PROD',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Debt Services',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reserves',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'GNI',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Total Debt (%)',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
