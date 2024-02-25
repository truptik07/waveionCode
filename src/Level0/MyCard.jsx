import React from 'react';
import { Grid, Card, CardMedia, Typography } from '@mui/material';

const MyCard = () => {
    return (
        <Grid container gap='20px' margin='70px  0px' alignItems='center'
        >
            <Grid item >
                <Card sx={{
                    width: 250,
                    color: "#5514b4",
                    cursor: 'pointer',
                    borderRadius: '12px',
                    transition: 'transform 0.5s',
                    '&:hover': {
                        boxShadow: '0 0 20px 2px #d365f2'
                    }
                }}>
                    <CardMedia
                        component="img"
                        image="https://img01.products.bt.co.uk/content/dam/bt/storefront/bt-home/extcust/images/icons/2023/july/broadband-icon.svg"
                        alt="Card image"
                        sx={{
                            transition: 'transform 0.5s',
                            '&:hover': {
                                transform: 'scale(1.1)',
                            }, padding: '50px', fontSize: '10px'
                        }}
                    />
                    <Typography gutterBottom variant="h6" component="div" margin='-30px 30px 30px 30px' textAlign='center'
                    >
                        Your broadband offers
                    </Typography>
                </Card>
            </Grid>

            <Grid item>
                <Card sx={{
                    width: 250,
                    color: "#5514b4",
                    cursor: 'pointer',
                    borderRadius: '12px',
                    transition: 'transform 0.5s',
                    '&:hover': {
                        boxShadow: '0 0 20px 2px #d365f2'
                    }
                }}>
                    <CardMedia
                        component="img"
                        image="https://img01.products.bt.co.uk/content/dam/bt/storefront/bt-home/extcust/images/icons/2023/july/flex-tv.svg"
                        alt="Card image"
                        sx={{
                            transition: 'transform 0.5s',
                            '&:hover': {
                                transform: 'scale(1.1)',
                            }, padding: '60px', fontSize: '10px'
                        }}
                    />
                    <Typography gutterBottom variant="h6" component="div" margin='-30px 30px 30px 30px' textAlign='center'
                    >Upgrade or switch your TV</Typography>
                </Card>
            </Grid>

            <Grid item>
                <Card sx={{
                    width: 250,
                    color: "#5514b4",
                    cursor: 'pointer',
                    borderRadius: '12px',
                    transition: 'transform 0.5s',
                    '&:hover': {
                        boxShadow: '0 0 20px 2px #d365f2'
                    }
                }}>
                    <CardMedia
                        component="img"
                        image="https://img01.products.bt.co.uk/content/dam/bt/storefront/bt-home/extcust/images/icons/2023/july/bt-logo.svg"
                        alt="Card image"
                        sx={{
                            transition: 'transform 0.5s',
                            '&:hover': {
                                transform: 'scale(1.1)',
                            }, padding: '80px', fontSize: '10px'
                        }}
                    />
                    <Typography gutterBottom variant="h6" component="div" margin='-30px 30px 30px 30px' textAlign='center'
                    >Log in to manage My BT</Typography>
                </Card>
            </Grid>
        </Grid>
    );
}

export default MyCard;