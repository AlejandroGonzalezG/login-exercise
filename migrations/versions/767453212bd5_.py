"""empty message

Revision ID: 767453212bd5
Revises: 344c7e9d4d8e
Create Date: 2022-09-12 18:02:26.791427

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '767453212bd5'
down_revision = '344c7e9d4d8e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('profiles', 'users_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('users', 'is_active',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'is_active',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.alter_column('profiles', 'users_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###
