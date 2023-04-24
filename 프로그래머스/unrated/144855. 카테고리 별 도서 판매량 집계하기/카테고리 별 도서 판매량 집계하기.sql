select category, sum(sales) as total_sales
from book t1
left join book_sales t2
on t1.book_id = t2.book_id
where t2.sales_date between '2022-01-01' and '2022-01-31'
group by category
order by category;