import { dedent } from '@/utils/dedent';

export const repositoryCode = {
  extendWith: dedent(`
    @Repository
    public interface UserRepository extends JpaRepository<User, Long> {
        // Métodos automáticos do JpaRepository:
        // save(), findById(), findAll(), delete(), count(), etc.
    }
  `),
};
