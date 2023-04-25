select car_id, if (car_id in (
    select car_id
    from car_rental_company_rental_history
    where '2022-10-16' between start_date and end_date), '대여중', '대여 가능') as availability
from car_rental_company_rental_history
group by car_id
order by car_id desc