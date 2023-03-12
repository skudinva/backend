import {Sequelize, Model, DataTypes, DATE} from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const Post = sequelize.define('Post', {
    author: {type: DataTypes.STRING,
        allowNull: false
    },
    title: {type: DataTypes.STRING,
        allowNull: false
    },
    content: {type: DataTypes.STRING,
        allowNull: false
    },
    picture: {type: DataTypes.STRING,
        allowNull: true
    }
});

//export default sequelize.models.Post
export default Post

