import React from 'react';
import styles from './DraggableItem.module.css';

const DraggableItem = ({ src, onDragStart, id }) => {
    return (
        <img
            src={src}
            alt={`draggable item ${id}`}
            className={styles.items}
            draggable="true"
            onDragStart={(e) => onDragStart(e, id)}
            style={{
                maxWidth: '50%', maxHeight: '45%',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                margin: '5px',
                borderRadius: '10px',
                padding: '10px',
            }}

        />
    );
};

export default DraggableItem;
