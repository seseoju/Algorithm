SELECT t1.title, t1.board_id, t2.reply_id, t2.writer_id, t2.contents, date_format(t2.created_date,'%Y-%m-%d') as created_date
from used_goods_board t1
join used_goods_reply t2 
    on t1.board_id = t2.board_id 
where date_format(t1.created_date, '%Y-%m') = '2022-10'
order by t2.created_date , t1.title