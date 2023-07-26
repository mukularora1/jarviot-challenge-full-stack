import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/user/userSlice';
import DashboardDataUsageGraph from './DashboardDataUsageGraph';
import DashboardStorageCard from './DashboardStorageCard';
function DashboardStats() {
  const user = useSelector(selectUser);
  const statsCardData = [
    {
      title: 'Total storage',
      stats: user.usage.totalStorage,
      description: 'Total storage use by user in Google Drive.',
      icon: (
        <LanguageIcon
          sx={{
            '&.MuiSvgIcon-root': {
              width: 50,
              height: 50,
              fill: 'blue',
            },
          }}
        />
      ),
    },
    {
      title: 'Used storage',
      stats: user.usage.usedStorage,
      description: 'Used storage use by user in Google Drive.',
      icon: (
        <PeopleAltOutlinedIcon
          sx={{
            '&.MuiSvgIcon-root': {
              width: 50,
              height: 50,
              fill: 'green',
            },
          }}
        />
      ),
    },
    {
      title: 'Remaining storage',
      stats: user.usage.remainingStorage,
      description: 'Remaining storage use by user in Google Drive.',
      icon: (
        <ArticleOutlinedIcon
          sx={{
            '&.MuiSvgIcon-root': {
              width: 50,
              height: 50,
              fill: 'yellow',
            },
          }}
        />
      ),
    },
  ];
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <DashboardDataUsageGraph />
      {statsCardData.map((el) => {
        return (
          <DashboardStorageCard
            title={el.title}
            stats={el.stats}
            description={el.description}
            Icon={el.icon}
          />
        );
      })}
    </div>
  );
}

export default DashboardStats;
