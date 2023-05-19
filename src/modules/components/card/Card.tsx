import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from "@mui/material/CardContent";
import Button from '@mui/material/Button';
import {CardActions} from "@mui/material";
import Chip from '@mui/material/Chip';
import styles from "./card.module.scss";

type cardDataType = {
    key: number,
    author: string,
    creationDate: string,
    content: string,
    chips: [{
        id: number,
        tag: string
    }]
}
function CardComponent (cardData: cardDataType){
    return (
        <Card className={styles.cardWrapper}>
            <CardHeader
            title={cardData.author}
            subheader={cardData.creationDate}/>
            <CardContent className={styles.cardContent}>
                <p>{cardData.content}</p>
            </CardContent>
            <CardActions className={styles.cardFooter}>
                <div>
                    {cardData.chips.map(chip => <Chip key={chip.id} label={chip.tag} className={styles.chip}/>)}
                </div>
                <Button className={styles.button}>Read more</Button>
            </CardActions>
        </Card>
    )
}
export default CardComponent;