select t2.ingredient_type, sum(t1.total_order) as total_order
from first_half t1
right join icecream_info t2 on t1.flavor = t2.flavor
group by t2.ingredient_type
order by total_order