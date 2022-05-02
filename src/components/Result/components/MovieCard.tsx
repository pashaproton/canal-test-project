import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { Movie } from '../../../types';
import { getImageUrl } from '../../../helpers';

interface MovieCardProps {
  data: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({
  data
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {data.imagePath && (
        <CardMedia
          component="img"
          height="140"
          image={getImageUrl(data.imagePath)}
          alt={data.title}
          data-testid="movie-card-image"
        />
      )}
      <CardContent>
        <Typography data-testid="movie-card-title" gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography data-testid="movie-card-description" variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <hr />
        <Typography data-testid="movie-card-popularity" variant="body2" color="text.secondary">
          Popularity: {data.popularity}
        </Typography>
        <Grid container justifyContent="space-between">
          <Typography data-testid="movie-card-rate" variant="body2" color="text.secondary">
            {data.voteAverage} ({data.voteCount})
          </Typography>
          <Typography data-testid="movie-card-date" variant="body2" color="text.secondary" align="right">
            {data.date}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default React.memo(MovieCard);
