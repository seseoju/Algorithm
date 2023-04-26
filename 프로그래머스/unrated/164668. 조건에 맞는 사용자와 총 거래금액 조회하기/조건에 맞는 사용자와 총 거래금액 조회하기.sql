select t2.user_id, t2.nickname, sum(t1.price) as total_sales
from used_goods_board t1, used_goods_user t2
where t1.writer_id = t2.user_id and t1.status = 'DONE'
group by t1.writer_id having total_sales >= 700000
order by total_sales