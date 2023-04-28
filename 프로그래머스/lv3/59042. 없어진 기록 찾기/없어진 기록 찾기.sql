select t2.animal_id, t2.name
from animal_ins t1
right join animal_outs t2 on t1.animal_id = t2.animal_id
where t1.datetime is null;