import React from 'react';
import JavaCodeHighlight from '../../components/common/JavaCodeHighlight';

const JavaExample: React.FC = () => {
  const javaCode = `
import java.util.List;
import java.util.ArrayList;

@RestController
public class UserController {
    
    private final UserService userService;
    
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/users")
    public List<User> getUsers() {
        List<User> users = userService.findAll();
        if (users.isEmpty()) {
            throw new RuntimeException("No users found");
        }
        return users;
    }
    
    private void processUsers(List<User> users) {
        for (User user : users) {
            String name = user.getName();
            System.out.println("Processing: " + name);
        }
    }
}
  `.trim();

  return (
    <div>
      <h3>Exemplo de Controller Java Spring</h3>
      <JavaCodeHighlight
        code={javaCode}
        showLineNumbers={true}
        className="my-java-example"
      />
    </div>
  );
};

export default JavaExample;
