import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface PagingProps {
  onPrevious: () => void;
  onNext: () => void;
  count: number;
}

const Paging: React.FC<PagingProps> = ({ onPrevious, onNext, count }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
            sx={{
              color: 'white', // Set text color
              '&.Mui-selected': {
                color: 'white', // Text color for selected page
                backgroundColor: 'gray', // Background color for selected page
              },
            }}
          />
        )}
        onChange={(event, page) => {
          if (page < count) {
            onPrevious();
          } else {
            onNext();
          }
        }}
      />
    </Stack>
  );
};

export default Paging;
